import React from "react";
import { useForm } from "@mantine/form";
import { Stack, TextInput, Select, Button } from "@mantine/core";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { fireDb } from "../FirebaseConfig";
import { Notifications } from "@mantine/notifications";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";


function TransactionForm({
    formMode,
    setFormMode,
    setShowForm,
    showForm,
}
) {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("user"));
    const transactionForm = useForm({
        initialValues: {
            name: "",
            type: "",
            amount: "",
            date: "",
            category: "",
            reference: "",
        },
    });
    const onSubmit = async (event) => {
        event.preventDefault();

//try catch block used to call API
        try {
            dispatch(ShowLoading())
            await addDoc(
                collection(fireDb,
                    `users/${user.id}/transactions`), transactionForm.values

            );

            Notifications.show({
                title: "Transaction done Successfully",
                color: "teal",
            })
            dispatch(HideLoading())
            setShowForm(false);

        } catch (error) {

            Notifications.show ({
                title: "Error adding transaction",
                color: "red",
            })

            dispatch(HideLoading())

        }
    };

    return (
        <div>
            <form action=""
                onSubmit={onSubmit}>

                <Stack>
                    <TextInput
                        name="name"
                        label="Name"
                        placeholder="Enter Transaction Name"
                        {...transactionForm.getInputProps("name")}
                    />
                    <div className="flex justify-between"></div>
                    <TextInput
                        width="60%"
                        name="amount"
                        label="Amount"
                        placeholder=" Enter Transaction Amount"
                        {...transactionForm.getInputProps("amount")}

                    />
                    <Select
                        name="type"
                        label="Type"
                        placeholder="Select Transaction Type"
                        data={[
                            { value: "income", label: "Income" },
                            { value: "expense", label: "Expense" },
                        ]}
                    />
                    <div className="flex justify-between">

                        <Select
                            className="w-100"
                            name="category"
                            label="Category"
                            placeholder="Select Transaction Category"
                            data={[
                                { value: "food", label: "Food" },
                                { value: "business", label: "Business" },
                                { value: "personal", label: "Personal" },
                                { value: "education", label: "Education" },
                                { value: "entertainment", label: "Entertainment" },
                                { value: "salary", label: "Salary" },
                                { value: "shopping", label: "Shopping" },
                                { value: "health", label: "Health" },
                                { value: "travel", label: "Travel" },
                                { value: "savings", label: "Savings" },
                                { value: "loan", label: "Loan" },
                            ]}
                            {...transactionForm.getInputProps("category")}
                        />
                    </div>

                    <div className="flex justify-between"> </div>
                    <TextInput
                        width="60%"
                        name="date"
                        type="date"
                        label="Date"
                        placeholder=" Enter Transaction Date"
                        {...transactionForm.getInputProps("date")}

                    />
                    <div className="flex justify-between"></div>
                    <TextInput
                        width="60%"
                        name="reference"
                        label="Reference"
                        placeholder=" Enter Transaction Reference"
                        {...transactionForm.getInputProps("reference")}
                    />


                    <Button
                        color="green" type="submit"> ADD</Button>

                </Stack>
            </form>
        </div>
    );
}

export default TransactionForm;
