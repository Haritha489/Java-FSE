import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const { cohort } = props;

    return (
        <div className={styles.box}>
            <h2>{cohort.name}</h2>
            <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
                {cohort.status}
            </h3>
            <dl>
                <dt>Trainer:</dt>
                <dd>{cohort.trainer}</dd>
                <dt>Start Date:</dt>
                <dd>{cohort.startDate}</dd>
                <dt>End Date:</dt>
                <dd>{cohort.endDate}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
