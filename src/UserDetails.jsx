import React from "react";
import styles from "./userDetails.module.css";

const UserDetails = (props) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={`${props.first_name} ${props.last_name}`} className={styles.avatar} />
      <h3>{`${props.first_name} ${props.last_name}`}</h3>
      <p>Address: {props.address.street}, {props.address.city}, {props.address.country}</p>
      <p>Karma: {props.karma}</p>
      <p>Followers: {props.followers}</p>
      <p>Posts: {props.posts}</p>
      <button>{props.isFollowing ? "Unfollow" : "Follow"}</button>
    </div>
  );
};

export default UserDetails;
