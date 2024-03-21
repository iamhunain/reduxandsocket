// Apidata.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './redux/Actions';

const Apidata = ({ fetchData, data, loading, error }) => {
    useEffect(() => {
        fetchData(); // Call fetchData action creator when component mounts
        console.log('data', data, loading, error);
    }, [fetchData]);

    return (
        <div>
            {loading && 'Loading...'}
            {data && (
                <ul>
                    {data?.data?.map(item => (
                        <li className='text-black' key={item.id}>{item.id}</li> // Assuming 'name' is the property you want to display
                    ))}
                </ul>
            )}
        
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.apireducer.data, // Accessing data from the apireducer
    loading: state.apireducer.loading,
    error: state.apireducer.error
  });

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Apidata);



