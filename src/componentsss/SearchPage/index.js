import React, { useState } from 'react'
import { DatePicker, Select, InputNumber } from 'antd'
// import './index.css';
import Bounce from 'react-reveal/Bounce';
import Result from '../Results/Result'



export default () => {

	const { Option } = Select;


	const [date, setDate] = useState("");
	const [carrier, setCarrier] = useState("");
	const [flightNum, setFlightNum] = useState("");
	const [data, setData] = useState({});

	const onFlightNumChange = value => {
		console.log(value);
		setFlightNum(value);
	};

	const onChangeDate = (date, dataString) => {
		console.log(data, dataString);
		setDate(dataString);
	}

	const onChange = value => {
		console.log({ value });
		setCarrier(value);
	};


	const onSearch = () => {

		if (!carrier || !date || !flightNum) {
			alert("Carrier, flightNumber and Date is required")
			return;
		}
		var firstFormat = date.replace("-", "/");
		var formattedDate = firstFormat.replace("-", "/");
		console.log(date, formattedDate);


		fetch(`https://cors-anywhere.herokuapp.com/https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/${carrier}/${flightNum}/dep/${formattedDate}`,
			{
				method: "GET",
				headers: {
					appId: "a052bb44",
					appKey: "d5d28ccb205d90d6fc5e845f8830340a"
				}
			}

		)
			.then(data => data.json())
			.then(finalData => {
				setData(finalData)
				console.log(finalData)
			});
	};


	return (
		<div className="part_1">
			<div className="Part2">
				<Bounce left><h1 style={{ color: 'white' }} className="top_head"> CHECK FLIGHT STATUS FOR YOUR ON-BOARD </h1></Bounce>
				<div>
					<div className="third" >
						<div>
							<Bounce right>
								<h3 style={{ color: 'white' }}>Airline</h3>
							</Bounce>

							<Select

								style={{ width: 200 }}
								placeholder="Select an Airline"
								optionFilterProp="children"
								onChange={onChange}
								filterOption={(input, option) =>
									option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
								}
							>
								<Option value="EY">Eithad Airway</Option>
								<Option value="ET">Ethopia Airway</Option>
								<Option value="QR">Qatar Airway</Option>
							</Select>
						</div>
						<div>
							<Bounce left>
								<h3 style={{ color: 'white' }} >Flight Code</h3>
							</Bounce>
							<InputNumber onChange={onFlightNumChange} className="input9" size="25" placeholder="ex.184" />

						</div>
						<div>
							<Bounce left>
								<h3 style={{ color: 'white' }}>Select Date</h3>
							</Bounce>
							<DatePicker onChange={onChangeDate} />

						</div>
						<div >
							<Bounce>
								<h3 style={{ color: 'white' }}>Click Here</h3>
							</Bounce>

							<button type="primary" onClick={onSearch} className="btn2"> Search</button>
							{/* onClick={onSearch} */}
						</div>

					</div>
				</div>
				<div>
					{data.flightStatuses && data.flightStatuses.length > 0 && (
						<div className="result_Page">
							<h1 style={{ color: 'white' }}>Search Response</h1>
							<Result status={data.flightStatuses[0].status}
								flightData={data.flightStatuses[0]}
								airportInfo={data.appendix.airports[0]}
								airportsInfo={data.appendix.airports[1]}

							/>

						</div>)}
					{data.flightStatuses && data.flightStatuses.length === 0 && (
						<h1> Oop! Sorry no info avaiable. Try later</h1>
					)}

				</div>

			</div>

		</div>
	);

};













// const style = {
// 	resultBox:{
// 		borderRadius:10,
// 		boxShadow: 
// 		'0px 1px 2px 1px rgba(0,0,0,0.4), 0px 0px 1px rgba(0,0,0,0.4)',
// 		backgroundColor: "white",
// 		padding: 600,
// 		height: 400,
// 		width: 600,
// 		margin: "auto",
// 		marginTop:10,
// 		// display: "flex"
// 	},
// 	box: {
// 		borderRadius: 10,
// 		boxShadow:
// 		'0px 1px 2px 1px rgba(0,0,0,0.4), 0px 0px 1px rgba(0,0,0,0.4)',
// 		backgroundColor: "white",
// 		padding:20,
// 		margin:"auto",
// 		width: 600,
// 		height: 100,
// 		marginTop: 10,
// 		// display: "flex",

// 	},
// 	mainheader:{},
// 	searchBox:{
// 		display:" block"
// 	},
// 	marginOfSearchBox:{
// 		margin:0,

// 	},
// }