import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>NUESTRO EQUIPO</h2>
          
          </div>
          <div id="row" >
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                   
                         <img src={d.img} alt="..." className="team-img"  />
                     
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                        {d.link!="" &&
                        <a href={d.link}><i class="fa fa-linkedin fa-2x"></i></a>
                         }
                      
                        
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
