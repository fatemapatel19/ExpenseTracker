import React from "react";
import { useForm } from "@mantine/form";
import { Anchor, Button, Card, Divider, Stack, TextInput, Title } from "@mantine/core";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Await } from "react-router-dom";
import { fireDb } from "../FirebaseConfig";
import CryptoJS from "crypto-js";
import { Notifications } from "@mantine/notifications";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice"

function Register() {
    const dispatch = useDispatch();
    const registerForm = useForm({
        initialValues: {
            name: "",
            email: "",
            password: "",
            
        },
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(registerForm.values);
        // for already existing user try catch methos and use query as where does not work as query check condition 
        try {
            dispatch(ShowLoading());
            // uery logic to check existance 
            const qry = query(collection(fireDb, "users"),
                where("email", "==", registerForm.values.email))
            const existingUsers = await getDocs(qry);

            if (existingUsers.size > 0) {
                Notifications.show({
                    title: "User Already Exists",
                    color: "red",
                });
                return;
            }
            else {
                // pass encrytption logic
                const encryptedPassword = CryptoJS.AES.encrypt(
                    registerForm.values.password,
                    "Expenso" //secret key
                ).toString();

                const response = await addDoc(collection(fireDb, "users"),
                    {
                        ...registerForm.values,
                        password: encryptedPassword,
                    });

                if (response.id) {
                    Notifications.show({
                        title: "User Created Sucessfully",
                        color: "green",
                    });
                }
                else {
                    Notifications.show({
                        title: "Filed To Create Account",
                        color: "red",
                    });

                }
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            Notifications.show({
                title: "Something Went Wrong. Try Again",
                color: "red",
            });

        }   //Db is the database instanceand users to be collection path

    };
    return (
        <div class="flex h-screen justify-center items-center">
            <div>
            <Card sx={{
                width: 450,
                paddding: "md",
            }}
                shadow="lg"
                withBorder>

                <span> REGISTER NOW</span>
                <Divider
                    variant="solid"
                    color="green"
                />
                <form action="" onSubmit={onSubmit}>
                    <Stack>
                        <TextInput
                            label="Name"
                            placeholder="Enter Your First Name"
                            name="name"
                            {...registerForm.getInputProps("name")} />

                        <TextInput
                            label="Email"
                            placeholder="Enter Your Email"
                            name="email"
                            {...registerForm.getInputProps("email")} />

                        <TextInput
                            label="Password"
                            placeholder="Enter Your Password"
                            type="password"
                            name="password"
                            {...registerForm.getInputProps("password")} />

                        <Button type="submit" color="green">
                            Submit
                        </Button>
                        <Anchor href="/GetStarted" >
                            Have an Account? Login
                        </Anchor>
                    </Stack>

                </form>
            </Card>
        </div>
        </div>
    )
}
export default Register;