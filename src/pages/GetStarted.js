import React from "react";
import { useForm } from "@mantine/form";
import { Anchor, Button, Card, Divider, Stack, TextInput, } from "@mantine/core";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { fireDb } from "../FirebaseConfig";
import CryptoJS from "crypto-js";
import { Notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice"

function GetStarted() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const GetStartedForm = useForm({
        initialValues: {

            email: "",
            password: "",
        },
    });
    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(ShowLoading());
            const qry = query(collection(fireDb, "users"),
                where("email", "==", GetStartedForm.values.email),


            );

            const existingUsers = await getDocs(qry);
            if (existingUsers.size > 0) {
                // decryption logic (AES is algo)
                const decryptedPassword = CryptoJS.AES.decrypt(
                    existingUsers.docs[0].data().password,
                    "Expenso" //secret key
                ).toString(CryptoJS.enc.Utf8);

                if (decryptedPassword === GetStartedForm.values.password) {

                    Notifications.show({
                        title: "Login Sucessfull",
                        color: "green",
                    });
                    const dataToPutInLocalStorage = {
                        name: existingUsers.docs[0].data().name,
                        email: existingUsers.docs[0].data().email,
                        id: existingUsers.docs[0].data().id,
                    }
                    localStorage.setItem("user", JSON.stringify(dataToPutInLocalStorage));   //to check useris present in the local storage to get data from file store
                    navigate("/")
                }
                else {
                    Notifications.show({
                        title: "Invalid Credentials",
                        color: "red",
                    })
                }

            }
            else {
                Notifications.show({
                    title: "Login Failed",
                    color: "red",
                });
            }
            dispatch(HideLoading());

        } catch (error) {
            dispatch(HideLoading());
            Notifications.show({
                title: "Something Went Wrong",
                color: "red",
            });
        }
    };


    return (
        <div class="flex h-screen justify-center items-center">
        <div >
            <Card sx={{
                width: 450,
                paddding: "md",
            }}
                shadow="lg"
                withBorder>

                <span> LOGIN </span>
                <Divider
                    variant="solid"
                    color="green"
                />
                <form action="" onSubmit={onSubmit}>
                    <Stack>

                        <TextInput
                            label="Email"
                            placeholder="Enter Your Email"
                            name="email"
                            {...GetStartedForm.getInputProps("email")} />

                        <TextInput
                            label="Password"
                            placeholder="Enter Your Password"
                            type="password"
                            name="password"
                            {...GetStartedForm.getInputProps("password")} />

                        <Button type="submit" color="green">
                            Submit
                        </Button>
                        <Anchor href="/Register" >
                            Click here to Register
                        </Anchor>
                    </Stack>

                </form>
            </Card>
        </div>
        </div>
    )
}
export default GetStarted;