import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Customers() {
    const [customers, setCustomers] = useState([]);
    const [customersCopy, setCustomersCopy] = useState([]);
	const [countries, setCountries] = useState({});
    const [defaultCountry, setDefaultCountry] = useState('');
    const [cities, setCities] = useState([]);
    const [defaultCity] = useState('');
    const [inputSearch, setInputSearch] = useState('');

    const handleChangeCountry = (e) => {
        setDefaultCountry(e.target.value);
        setCities(countries[e.target.value]);
        searchCustomer(e.target.value);
    }

    const handleChangeCity = (e) => {
        searchCustomer(defaultCountry, e.target.value);
    }

    const handleSearchbar = () => {
        if(inputSearch.length)
        {
            let filletCustomers = customers.filter(customer => {
                return ( customer.name.toLowerCase().includes(inputSearch.toLowerCase()) || customer.phone.toLowerCase().includes(inputSearch.toLowerCase()) || customer.email.toLowerCase().includes(inputSearch.toLowerCase()) )
            });

            setCustomersCopy(filletCustomers);
        }
        else{
            searchCustomer(defaultCountry, defaultCity);
        }
    }

    const searchCustomer = (country, city) => {
        let filletCustomers = customers.filter(customer => {
            if( (country && country.length && customer.country !== country) || (city && city.length && customer.city !== city) ){
                return false;
            }

            return true;
        });

        setCustomersCopy(filletCustomers);
    }

	useEffect(() => {
		axios.get('https://607a90abbd56a60017ba2c5e.mockapi.io/Customer')
			.then((response) => {
				setCustomers(response.data);
                setCustomersCopy(response.data);
			});
	}, []);

	useEffect(() => {
        let object1 = {};
		for(const row of customers) {
            if(!object1.hasOwnProperty(row.country)) {
                object1[row.country] = [row.city]
            }

            if( !object1[row.country].includes(row.city) )
            {
                object1[row.country] = [...object1[row.country], row.city];
            }
		}

        setCountries(object1);
	}, [customers]);

    /*useEffect(() => {
        setDefaultCountry('Peru');
        setCities(countries['Peru']);
        searchCustomer('Peru');
	}, [countries]);*/

    // 
    return (
        <div className="card" style={{marginTop: 20}}>
            <div className="card-header">Customers</div>
            <div className="card-body">
                <SearchBox defaultCountry={defaultCountry} handleChangeCountry={handleChangeCountry} countries={countries} defaultCity={defaultCity} handleChangeCity={handleChangeCity} cities={cities} inputSearch={inputSearch} setInputSearch={setInputSearch} handleSearchbar={handleSearchbar} />
                <CustomerList customersCopy={customersCopy} />
            </div>
        </div>
    );
}

export default Customers;

function SearchBox(props)
{
    return (
        <>
            <div className="row" style={{marginBottom: 10}}>
                <div className="col-3">
                    <div className="form-group">
                        <select value={props.defaultCountry} onChange={props.handleChangeCountry} className="form-control form-control-sm">
                            <option value=''>Select country</option>
                            {Object.keys(props.countries).length && Object.keys(props.countries).map(function(row) {
                                return <option value={row} key={row}>{row}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <select defaultValue={props.defaultCity} onChange={props.handleChangeCity} className="form-control form-control-sm">
                            <option value=''>Select city</option>
                            {props.cities && props.cities.map((row) => {
                                return <option value={row} key={row}>{row}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <input type="text" value={props.inputSearch} onChange={(e) => props.setInputSearch(e.target.value)} onKeyUp={props.handleSearchbar} className="form-control form-control-sm" />
                    </div>
                </div>
            </div>
        </>
    );
}

function CustomerList(props) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {props.customersCopy && props.customersCopy.length ? (
                    props.customersCopy.map((row) => {
                        return <tr key={row.id}>
                            <td><a href={"/customer/"+row.id}>{row.id}</a></td>
                            <td>
                                <img src={"https://randomuser.me/api/portraits/men/"+row.id+".jpg"} alt="" width="30" className="img-thumbnail" />
                            </td>
                            <td>{row.name}</td>
                            <td>{row.phone}</td>
                            <td>{row.email}</td>
                            <td>{row.city}</td>
                            <td>{row.country}</td>
                        </tr>
                    })
                ) : (
                    <tr>
                        <td colSpan="7">No data found.</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}