import {FixedSizeList} from 'react-window'

export default function UserList({Users}){
    const row = ({index, style}) =>{
        return (
            <div style={style}>
                {index}.{Users[index].name}
            </div>
        )
    }
    return (
        <FixedSizeList
        height={500}
        widtth={500}
        itemSize={50}
        itemCount={Users.length}
        >
        
            {row}
        </FixedSizeList>
    )
}
