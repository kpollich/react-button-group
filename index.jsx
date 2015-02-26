'use strict';

var React = require('react')
var Group = require('./src')
var Button = Group.Button
var SplitButton = require('react-split-button/src')

var App = React.createClass({


    render: function() {

        var style = {
            width: '50%'
        }

        function clicked(value){
            console.log('clicked')
        }

        function arrowClick(){
            console.log('arrow click')
        }

        var items = [
            {
                label: 'export'
            },
            {
                label: 'Save'
            }
        ]

        var x
        return (
            <div className="App" style={{padding: 10}}>
                <Group defaultPressedIndex={1} style={{width: 230}}>
                    <SplitButton label="hello world!" commonStyle={{color: 'red'}} fn={clicked} arrowPosition='left' onArrowClick={arrowClick}>

                    </SplitButton>
                    <Button onToggle={arrowClick}>test me</Button>
                    <SplitButton items={items} label="choose 2"></SplitButton>

                </Group>



            </div>
        )
    }
})

React.render(<App />, document.getElementById('content'))