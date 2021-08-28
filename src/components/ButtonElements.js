import styled from "styled-components";
import { Link } from 'react-scroll'

export const Button = styled(Link)`
position: relative;
  display: inline-block;
  line-height: 1.5;
  background: ${({primary}) => (primary ? '#c3073f' : '#1a1a1d')};
  white-space: nowrap;
  border-radius: 50px;
  border: 1px solid #c3073f;
  padding: ${({big}) => (big ? '8px 20px' : '10px 28px')};
  outline: none;
  color: #fff;
  cursor: pointer;
  transition: color 0.5s ease;
  margin: 0 15px 15px 0;
  z-index: 1;
  text-decoration: none;

  &:hover {
    color: #fff;
  }

  :before {
    content: "";
    position: absolute;
    border-radius: 50px;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: ${({primary}) => (primary ? '#1a1a1d' : '#c3073f')};
    z-index: -1;
    transition: width 0.5s ease;
  } 
  &:hover::before {
        width: 100%;
    }

`
  