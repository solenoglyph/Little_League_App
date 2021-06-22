import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from '../components/Team';


class TeamsContainer extends Component {


    render() {

        let teams = this.props.teams.map(team => <Team key={team.id} team={team}/> )
     
    
        return (
            
            <div>
                {teams} 
            </div>
        );
    }
}

const mapStateToProps = state => {
    
    return {
        teams: state.teams.teams
      }
}
export default connect(mapStateToProps)(TeamsContainer);