type CommandElementType =
  | 'Command'
  | 'CONSTANT'
  | 'INTEGER'
  | 'FLOAT'
  | 'STRING'
  | 'BOOLEAN';

type CommandElementOption = {
  name: string;
  value: string;
};

type CommandElement = {
  id: string;
  type: CommandElementType;
  name: string;
  options?: CommandElementOption[];
};

export default CommandElement;
