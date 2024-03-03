import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import CommandElement from '../../types/CommandElement';

export default function Main() {
  const [commandElements, setCommandElements] = useState<CommandElement[]>([]);

  return (
    <div>
    </div>
  );
}

const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;
