import React, { Component } from 'react';

// const ContentComponent = React.lazy(() => import('./ContentComponent'));
const ContentComponent = React.lazy(() => {
    return new Promise(resolve => {
       //setTimeout(() => resolve(import("./ContentComponent"), 3000))
       //Suspense dùng để bắt try catch lazy để xem lazy đã load chưa. Nếu có thì render ra, nếu không thì trả ra fallback. 
       //Chỉ cần khoá resolve thì fallback sẽ chạy
       //resolve(import("./ContentComponent"))
    });
    
});

export default class DemoLazy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        return (
            <div>
                <React.Suspense fallback={<div>Loading Component...</div>}>

                    {this.state.loading ? (
                        <div>Loading User...</div>
                    ) : (
                            <ContentComponent />
                        )}

                </React.Suspense>
            </div>
        );
    }
}
