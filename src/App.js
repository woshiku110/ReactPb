import React,{Component} from 'react';
import {Home} from './pages/'
import {sum} from './utils/utils'
export default class App extends Component{
    render() {
        return <div>
                    <p>i am react page lalala</p>
                    <Home />
                </div>
    }

    componentDidMount(){
        console.log('1+1',sum(1,1))
    }
}
