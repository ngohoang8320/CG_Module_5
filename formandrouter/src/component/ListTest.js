

function ListTest() {

    let accounts = [
        {
            username: "Test1",
            password: "123"
        },
        {
            username: "Test2",
            password: "1234"
        },
        {
            username: "Test3",
            password: "12345"
        }
    ]


    return (
        <>
            <h1>This is the account list</h1>

            <table>
                {accounts.map((account, index) => {
                    return (
                        <tr key={index}>
                            <td>{account.username}</td>
                            <td>{account.password}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default ListTest