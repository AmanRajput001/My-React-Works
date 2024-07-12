function ListMap(props){

    const ItemList = props.items.map(
        (item)=>{
          return (  
            <li  className="fw-bold list-group-item list-group-item-action list-group-item-light p-2 m-2" key={item.id}>
                {item.name}
            </li>
          );
        }
    )

    return (
        <ol className="list-group bg-success p-2 m-5">
            {ItemList}
        </ol>
    )
}

export default ListMap