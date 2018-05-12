import React, { Component } from 'react'
import { DownHeaderSubCard } from './DownHeaderSubCard';

export class DownHeaderSub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories:[]
        }
        
    }

    componentWillMount(){
        this.setState({categories:this.props.categories})
    }
    
  render() {
      let categories = this.state.categories.map((category) => {
          if(category.sub==true)
          {
            return <DownHeaderSubCard title={category.title} />
          }
          else
          {
            return  <li><a className="dropdown-item" href={category.action}>{category.title}</a> </li>
          }
      });
    return (
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {categories}
        </div>
    )
  }
}

export default DownHeaderSub
