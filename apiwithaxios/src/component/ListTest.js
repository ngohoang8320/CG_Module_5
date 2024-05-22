import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as accountService from '../service/AccountService';



function ListTest() {

    const navigate = useNavigate();

    const [accounts, setAccounts] = useState([]);

    const getAll = async () => {
        let accountList = await accountService.getAll();
        setAccounts(accountList);
    }

    useEffect(() => {
        getAll();
    }, [accounts])

    const remove = async (account) => {
        try {
            await accountService.removeAccount(account);
            toast.success("Success deletion!")
            navigate("/accounts");
        } catch (e) {
            toast.error("Error when trying to delete account!")
        }
    }

    return (
        <>
            <h1>This is the account list</h1>

            <table>
                <tbody>
                    {accounts.map((account, index) => {
                        return (
                            <tr key={index}>
                                <td>{account.name}</td>
                                <td>{account.password}</td>
                                <td><button onClick={() => remove(account)}>Remove</button></td>
                                <td><Link to >Edit</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ListTest