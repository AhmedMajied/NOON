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
            return <DownHeaderSubCard key={category.id} title={category.title} />
          }
          else
          {
            return  <li key={category.id}><a className="dropdown-item" href={category.action}>{category.title}</a> </li>
          }
      });
    return (
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <ul className="cul-no-bullets">{categories}</ul>
        </div>
    )
  }
}

export default DownHeaderSub
