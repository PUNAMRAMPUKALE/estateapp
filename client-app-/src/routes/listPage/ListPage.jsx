import React from 'react'
import { listData } from '../../lib/dummyData';
import "./listPage.scss";
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';

function ListPage() {

const data = listData;


  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
         <Filter/>
         {data.map(item =>(
          <Card key={item.id} item={item}/>
         ))}
        </div>
        </div>
      <div className="mapContainer">
<Map places={data}/>
      </div>
    </div>
  )
}


export default ListPage;