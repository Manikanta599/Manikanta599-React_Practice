import React, { useState } from 'react';
import { Table } from 'antd';

// Define the TableRecord interface outside the component
interface TableRecord {
  key: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

// Define the valid fields as a union type
type Field = 'name' | 'email' | 'password' | 'phoneNumber';

// Function to generate columns
const getColumns = (
  handleInputChange: (value: string, field: Field, index: number) => void,
  inputValues: { [K in Field]: string[] }
) => [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: TableRecord, index: number) => (
      <input
        value={inputValues.name[index] || text} // Use input value if available, else default to original data
        onChange={(e) => handleInputChange(e.target.value, 'name', index)}
      />
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text: string, record: TableRecord, index: number) => (
      <input
        value={inputValues.email[index] || text}
        onChange={(e) => handleInputChange(e.target.value, 'email', index)}
      />
    ),
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
    render: (text: string, record: TableRecord, index: number) => (
      <input
        value={inputValues.password[index] || text}
        onChange={(e) => handleInputChange(e.target.value, 'password', index)}
      />
    ),
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber', 
    render: (text: string, record: TableRecord, index: number) => (
      <input
        value={inputValues.phoneNumber[index] || text}
        onChange={(e) => handleInputChange(e.target.value, 'phoneNumber', index)}
      />
    ),
  },
];

// React component
const TableInputs: React.FC = () => {
  // Initial data state
  const [data] = useState<TableRecord[]>([
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      phoneNumber: '1234567890',
    },
    {
      key: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
      phoneNumber: '9876543210',
    },
  ]);

  // State to hold the input values
  const [inputValues, setInputValues] = useState<{
    name: string[];
    email: string[];
    password: string[];
    phoneNumber: string[];
  }>({
    name: [],
    email: [],
    password: [],
    phoneNumber: [],
  });


  // Handler function for input changes
  const handleInputChange = (value: string, field: Field, index: number): void => {
    setInputValues((prev) => ({
      ...prev,
      [field]: prev[field].map((val, i) => (i === index ? value : val)),  
    }));
  };

  //Pass the handler function and input values to getColumns
  const columns = getColumns(handleInputChange, inputValues);

  return <Table dataSource={data} columns={columns} />; 


};


export default TableInputs;