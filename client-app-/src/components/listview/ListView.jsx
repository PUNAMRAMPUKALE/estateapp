import React from 'react'

import Card from "../card/Card"
import { listData } from "../../lib/dummyData";
const ListView = () => {
    return (
        <div className='main-list-view'>
            {listData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default ListView

