import React from 'react';
import styled from 'styled-components';
import profile from '/Users/cho1111/vegans/src/image/profile.png';

export default function TeamIntroduce(props) {
    return (
        <Background>
            <img src={profile} style={{
                position: 'fixed',
                left: '300px',
                top: '500px'
            }} />
            <ul style={{
                listStyle: 'none',
                position: 'fixed',
                top: '600px',
                left: '286px'
            }}>
                <li style={{
                    fontWeight: '660',
                    fontSize: '20px'
                }}>{props.name1}</li>
                <li style={{
                    marginLeft: '-5px',
                    fontSize: '15px'
                }}>{props.major1}</li>
                <li style={{
                    fontSize: '15px',
                    marginTop: '3px',
                    marginLeft: '2px'
                }}>{props.major2}</li>
                <li style={{
                    fontSize: '12px',
                    marginTop: '10px',
                    marginLeft: '-40px',
                    color: '#9B9B9B'
                }}>{props.email1}</li>
            </ul>
            <img src={profile} style={{
                position: 'fixed',
                left: '550px',
                top: '500px'
            }} />
            <ul style={{
                listStyle: 'none',
                position: 'fixed',
                top: '600px',
                left: '535px'
            }}>
                <li style={{
                    fontWeight: '660',
                    fontSize: '20px'
                }}>{props.name2}</li>
                <li style={{
                    marginLeft: '-5px',
                    fontSize: '15px'
                }}>{props.major3}</li>
                <li style={{
                    fontSize: '15px',
                    marginTop: '3px',
                    marginLeft: '2px'
                }}>{props.major4}</li>
                <li style={{
                    fontSize: '12px',
                    marginTop: '10px',
                    marginLeft: '-35px',
                    color: '#9B9B9B'
                }}>{props.email2}</li>
            </ul>
            <img src={profile} style={{
                position: 'fixed',
                left: '814px',
                top: '500px'
            }} />
            <ul style={{
                listStyle: 'none',
                position: 'fixed',
                top: '600px',
                left: '800px'
            }}>
                <li style={{
                    fontWeight: '660',
                    fontSize: '20px'
                }}>{props.name3}</li>
                <li style={{
                    marginLeft: '-3px',
                    fontSize: '15px'
                }}>{props.major5}</li>
                <li style={{
                    fontSize: '12px',
                    marginTop: '3px',
                    marginLeft: '-30px',
                    color: '#9B9B9B'
                }}>{props.email3}</li>
            </ul>
            <img src={profile} style={{
                position: 'fixed',
                left: '1074px',
                top: '500px'
            }} />
            <ul style={{
                listStyle: 'none',
                position: 'fixed',
                top: '600px',
                left: '1065px'
            }}>
                <li style={{
                    fontWeight: '660',
                    fontSize: '20px',
                    marginLeft: '-2px'
                }}>{props.name4}</li>
                <li style={{
                    marginLeft: '-3px',
                    fontSize: '15px'
                }}>{props.major6}</li>
                <li style={{
                    fontSize: '12px',
                    marginTop: '3px',
                    marginLeft: '-40px',
                    color: '#9B9B9B'
                }}>{props.email4}</li>
            </ul>
        </Background>
    )
}

const Background = styled.div`
  width: 100%;
  height: 484px;
`;

