import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';

export default forwardRef((props, ref) => {
    const [choice, setChoice] = useState('All');

    // expose AG Grid Filter Lifecycle callbacks
    useImperativeHandle(ref, () => {
        return {
            doesFilterPass(params) {
                return params === 0;
            },

            isFilterActive() {
                return choice === 0;
            },

            // this example isn't using getModel() and setModel(),
            // so safe to just leave these empty. don't do this in your code!!!
            getModel() { },

            setModel() { },
        };
    });

    const onChoiceChange = (event) => {
        setChoice(event.target.value);
    };

    useEffect(() => {
        props.filterChangedCallback();
    }, [choice]);

    return (
        <div onChange={onChoiceChange}>
            {/* <label
          style={{
            margin: '10px',
            padding: '5px',
            display: 'inline-block',
            backgroundColor: '#999999',
          }}
        >
          <input type="radio" name="year" value="All" checked={bool === 'All'} />{' '}
          Either
        </label> */}
            <label
                style={{
                    margin: '10px',
                    padding: '5px',
                    display: 'inline-block',
                    backgroundColor: '#999999',
                }}
            >
                <input type="checkbox" name="choice" value="All" checked={choice === 'All'} />{' '}
                Yes
            </label>
            <label
                style={{
                    margin: '10px',
                    padding: '5px',
                    display: 'inline-block',
                    backgroundColor: '#999999',
                }}
            >
                <input type="checkbox" name="choice" value="0" /> No
            </label>
        </div>
    );
});