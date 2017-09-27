import React, { Component } from 'react';
import 'whatwg-fetch';

class ArtistList extends Component{

    createArtistsList(artist, rank){
        const {mbid, name, image:[, medium], listeners} = artist;
        return (
            <tbody key={mbid} className="tbl-content">
                <tr>
                    <td>{rank+1}</td>
                    <td><img className="img-circle" src={medium['#text']} alt={`${name}`}/></td>
                    <td>{name}</td>
                    <td>{listeners}</td>
                </tr>
            </tbody>
        );
    };
    
    render(){
        return(
            <div>
                <table>
                    <thead className="tbl-header">
                        <tr>
                            <th>RANK</th>
                            <th>PROFILE</th>
                            <th>NAME</th>
                            <th>LISTENERS</th>
                        </tr>
                    </thead>
                    {this.props.artists.map(this.createArtistsList)}
                </table>
            </div>
        )
    }
};

export default ArtistList;