import React, { Component } from 'react';

//Tham Khao: https://daveceddia.com/extract-state-with-higher-order-components/


class CustomerList extends React.Component {

    render() {
        //Dùng để lấy các giá trị từ HOC, các state của HOC sẽ chuyển qua props cho component con
        console.log(this.props)
        return (
            <div>
                Customer List
        </div>
        );
    }
}
class CustomerInfo extends React.Component {


    render() {
        //Dùng để lấy các giá trị từ HOC, các state của HOC sẽ chuyển qua props cho component con
        console.log(this.props)
        return (
            <div>
                Customer Info
        </div>
        );
    }
}


function loadHoc() {
    return function (WrappedComponent, DataSource) {
        return class extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    data: DataSource
                };
            }

            componentDidMount() {
                //DataSource.addChangeListener(this.handleChange);
            }

            componentWillUnmount() {
                //DataSource.removeChangeListener(this.handleChange);
            }

            handleChange = () => {
                this.setState({
                    data: DataSource
                });
            }

            render() {
                return <WrappedComponent data={this.state.data} {...this.props} />;
            }
        };
    }
}
const CustomerListWithSubscription = loadHoc()(CustomerList, [1, 2, 3]);

const CustomerInfoWithSubscription = loadHoc()(CustomerInfo, "noi dung");

export default class DemoHOC extends Component {


    render() {
        return (
            <div>
                <div> DemoHOC </div>
                <CustomerListWithSubscription />
                <CustomerInfoWithSubscription />
            </div>
        );
    }
}
