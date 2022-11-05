import React from 'react'
import './list.css'
import { IState } from '../../App'
import {v4 as uuidv4} from 'uuid'
import {RiChatDeleteFill} from 'react-icons/ri'

interface IProps {
    peopleList: IState['people'][];
    setPeopleList: React.Dispatch<React.SetStateAction<IState["people"][]>>;
}

const List:React.FC<IProps> = ({peopleList,setPeopleList}) => {

    const handleDelete = (id: string | number) => {
        console.log(typeof id)
        const newPeopleList = peopleList.filter(people => people.id !== id)
        setPeopleList(newPeopleList)
    }
  return (
    <div className='list-wrapper'>
       
            {peopleList && peopleList.length > 0 && peopleList.map((people) => {
                return (
                    <div className='row' key={uuidv4()} onClick={() => handleDelete(people.id as any)}>
                    <div className='item'>
                    <div className='label'>Name: </div>
                    <p className='content'>{people.name}</p>
                </div>
                <div className='item'>
                    <div className='label'>Age: </div>
                    <p className='content'>{people.age}</p>
                </div>
                <div className='item'>
                    <div className='label'>Description: </div>
                    <p className='content'>{people.description}</p>
                </div>
                <RiChatDeleteFill className='delete' size={24}/>
                    </div>
                )
            })}
    </div>
  )
}

export default List