import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function SkeletonRow() {
    return (
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            <div className="row_container">
                <p className="row_container_title">
                    <Skeleton width={200} />
                </p>
                <div className="movies_row_container">
                    {Array.from({ length: 13 }).map((_, index) => (
                        <div className="movies_row" key={index}>
                            <Skeleton height={200} width={150} />
                            <p className="movie_title">
                                <Skeleton width={100} />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default SkeletonRow;