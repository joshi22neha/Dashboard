import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import { connect } from "react-redux";
import { fetchDetails } from "../actions";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDetails();
  }

  render() {
    const renderedList = this.props.details[0] ? (
      this.props.details[0].map((detail) => {
        return (
          <div key={detail.gravatar}>
            <div className="card">
              <img
                src={detail.gravatar}
                className="card-img-top"
                alt={`${detail.name} avatar`}
              />
              <div className="card-body">
                <div className="card-text">
                  <span className="card-text-name">{detail.name}</span>
                  <span className="card-text-details">
                    <p className="card-text-details-followers">
                      Followers: {detail.followers}
                    </p>
                    <p className="card-text-details-contributions">
                      Contributions: {detail.contributions}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>Loading...</div>
    );

    return <div className="card-list">{renderedList}</div>;
  }
}

const mapStateToProps = (state) => {
  return { details: state.DashboardDetails };
};

export default connect(mapStateToProps, { fetchDetails })(Dashboard);
