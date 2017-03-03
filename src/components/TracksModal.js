'use strict';

// Dependencies
import React, {Component} from 'react';

class TracksModal extends Component {
  render() {
    let msToTime = duration => {
        let milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }

    let allTracks = this.props.tracks.map((track, index) => {
      return (
        <div key={index} className="row">
          <div className="col-md-12">
            <p className="d-inline-block">{track.name}</p>
            <p className="d-inline-block float-right">{msToTime(track.duration_ms)}</p>
            <audio controls className="d-block">
              <source src={track.preview_url} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      )
    })

    return (
      <div className="modal fade" id={`exampleModalLong${this.props.albumKey}`} tabIndex={this.props.albumKey} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">All tracks</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5 className="modal-title" id="exampleModalLongTitle">{this.props.title}<span className="float-right">{this.props.release}</span></h5>
              {allTracks}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TracksModal;