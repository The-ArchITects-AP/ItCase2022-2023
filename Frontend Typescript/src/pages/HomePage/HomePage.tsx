import styles from './HomePage.module.css';
import Tile from '../../components/Tile/Tile';
import { Link } from 'react-router-dom'
import { Data, DrupalNode, IFrame } from '../../types';
import React, { useEffect, useState } from 'react';

interface DataProps {
  data: Data[]
}

const HomePage = ({ data }: DataProps) => {

  return (
    <div className={styles.homePageContainer}>

      {data.map((element) =>

        <Link to={`/detail`} key={element.id}>
          <Tile data={element} />
        </Link>

      )}

    </div>
  );
}

export default HomePage;