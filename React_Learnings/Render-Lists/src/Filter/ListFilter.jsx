function ListFilter(props) {

    const ItemListFilter = props.items.filter(
        (item) => {
            return (
                item.calories < 50
            );
        }
    )

    const ItemList = ItemListFilter.map(
        (item) => {
            return (
                <li className="fw-bold list-group-item list-group-item-light p-2 m-2" key={item.id}>
                        {item.name}
                </li>
            ) 
        }
    )

    return (
        <ol className="bg-success p-2 m-5">
            {ItemList}
        </ol>
    )
}

export default ListFilter