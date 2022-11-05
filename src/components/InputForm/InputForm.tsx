import React, { useState, useRef, useEffect } from "react";
import "./InputForm.css";
import { IState } from "../../App";
import {v4 as uuidv4} from 'uuid'

interface IProps {
  setPeopleList: React.Dispatch<React.SetStateAction<IState["people"][]>>;
}

const InputForm: React.FC<IProps> = ({ setPeopleList }) => {
  const [values, setValues] = useState<IState["people"]>({
    name: "",
    age: "",
    description: "",
  });

  const inputRef = useRef<any>()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) : void => {
    const { name, value } = e.target;
    setValues({ ...values, id: uuidv4(), [name]: value });
  };

  const submit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPeopleList(peopleList => [...peopleList, values])
    setValues({
      name: '',
      age: '',
      description: ''
    })
    inputRef.current.focus()
  }
  
  return (
    <form className="form-wrapper" onSubmit={submit}>
      <input
      ref={inputRef}
        type="text"
        name="name"
        placeholder="Name"
        className="input-controll"
        value={values?.name}
        onChange={onChange}
        required
        spellCheck= {false}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        className="input-controll"
        value={values?.age}
        onChange={onChange}
        required
        spellCheck= {false}
      />
      <textarea
        name="description"
        cols={30}
        rows={3}
        placeholder="description"
        className="input-controll"
        value={values?.description}
        onChange={onChange}
        required
        spellCheck= {false}
      ></textarea>

      <button type="submit" className="submit-btn">Thêm</button>
    </form>
  );
};

export default InputForm;
