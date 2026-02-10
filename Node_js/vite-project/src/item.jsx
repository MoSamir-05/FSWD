function Item(props){
    return(<>
        <table>
            <tr>
                <th>Name</th>
                <th>Cost</th>
                <th>Type</th>
            </tr>
            <td>{props.name}</td>
            <td>{props.cost}</td>
            <td>{props.type}</td>
        </table>
    </>
    );
}