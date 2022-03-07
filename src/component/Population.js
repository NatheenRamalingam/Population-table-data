import React, { useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';


function Population() {

    const[chinadata,setchinaData] = useState([]);
    const[indiaData,setIndiaData] = useState([]);
    const[usaData,setUsaData] = useState([]);
    


    useEffect(()=>{
       getChinadata()
       getIndiadata()
       getUsadata()
    },[])

    const fiveyear = (value)=>{
      if(value % 5 == 0){
        return 'lightgreen'
      }else{
        return 'white'
      }
    }

    const getChinadata = ()=>{
      fetch(`http://localhost:4000/china`)
      .then(response=>response.json())
      .then(res=>{
        console.log(res)
        setchinaData(res[1])
      })
    }
     const getIndiadata = ()=>{
      fetch(`http://localhost:4000/india`)
      .then(response=>response.json())
      .then(res=>{
        console.log(res)
        setIndiaData(res[1])
      })
    }
    const getUsadata = ()=>{
      fetch(`http://localhost:4000/usa`)
      .then(response=>response.json())
      .then(res=>{
        console.log(res)
        setUsaData(res[1])
      })
    }


    
  return (
    <div className='container'>
      <div className='row'>
        <h5 className='text-center mt-2'>CHINA POPULATION</h5>
        <div className="col-md-12 mt-2 mb-2 text-center" >
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Country-code</th>
                  <th>Year</th>
                  <th>population</th>
                  
                </tr>
              </thead>
              <tbody>
                
                  {
                    chinadata.map((item)=>{
                      return(
                        <tr>
                          <td>{item.country.value}</td>
                          <td>{item.countryiso3code}</td>
                          <td style={{background : fiveyear(item.date)}}>{item.date}</td>
                          <td>{item.value}</td>

                        </tr>

                      )
                    })
                  }
                  
                
                
              </tbody>
        </Table>

        </div>
        
        
        <br /><hr />
        <h5 className='text-center'>INDIA POPULATION</h5>
        <div className="col-md-12 mt-2 mb-2 text-center" >
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Country-code</th>
                  <th>Year</th>
                  <th>population</th>
                  
                </tr>
              </thead>
              <tbody>
                
                  {
                    indiaData.map((item)=>{
                      return(
                        <tr>
                          <td>{item.country.value}</td>
                          <td>{item.countryiso3code}</td>
                          <td style={{background : fiveyear(item.date)}}>{item.date}</td>
                          <td>{item.value}</td>

                        </tr>

                      )
                    })
                  }
                  
                
                
              </tbody>
        </Table>

        </div>
        <br /><hr />
        <h5 className='text-center'>USA POPULATION</h5>
        <div className="col-md-12 mt-2 mb-2 text-center" >
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Country-code</th>
                  <th>Year</th>
                  <th>population</th>
                  
                </tr>
              </thead>
              <tbody>
                
                  {
                    usaData.map((item)=>{
                      return(
                        <tr>
                          <td>{item.country.value}</td>
                          <td>{item.countryiso3code}</td>
                          <td style={{background : fiveyear(item.date)}}>{item.date}</td>
                          <td>{item.value}</td>

                        </tr>

                      )
                    })
                  }
                  
                
                
              </tbody>
        </Table>

        </div>


      </div>
      
     

    </div>
  )
}

export default Population