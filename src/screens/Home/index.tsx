import React, {useEffect, useState} from 'react';
import * as Styles from './styles';
import Header from './components/Header';
import Body from './components/Body';
import Icons from '../../components/Icons';
import List from './components/List';
import axios from 'axios';
import {Platform} from 'react-native';

interface EmployeeProps {
  admission_date: string;
  id: string;
  image: string;
  job: string;
  name: string;
  phone: string;
}

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataEmployees = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        Platform.OS === 'ios'
          ? 'http://localhost:3000/employees'
          : 'http://10.0.2.2:3000/employees',
      );
      setEmployees(response.data);
      setFilteredEmployees(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataEmployees();
  }, []);

  useEffect(() => {
    if (searchInput === '') {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter((employee: EmployeeProps) => {
        const lowerCaseInput = searchInput.toLowerCase();
        return (
          employee.name.toLowerCase().includes(lowerCaseInput) ||
          employee.job.toLowerCase().includes(lowerCaseInput) ||
          employee.phone.toLowerCase().includes(lowerCaseInput)
        );
      });
      setFilteredEmployees(filtered);
    }
  }, [searchInput, employees]);

  return (
    <Styles.Container>
      <Header />
      <Body />

      <Styles.SeachContainer>
        <Icons name="search" width={24} height={24} />
        <Styles.SeachInput
          placeholder="Pesquisar"
          onChangeText={text => setSearchInput(text)}
        />
      </Styles.SeachContainer>

      <Styles.ListContainer>
        <List employees={filteredEmployees} loading={loading} />
      </Styles.ListContainer>
    </Styles.Container>
  );
};

export default Home;
