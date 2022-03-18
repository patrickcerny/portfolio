import { useEffect, useRef, useState } from 'react';
import './Commandline.scss';

enum CommandlineEnum {
  help = 'help',
  git = 'git',
  dir = 'dir',
  ls = 'ls',
  cd = 'cd',
  mkdir = 'mkdir',
}

enum CommandTypes {
  info = '#fff',
  error = '#f00',
  success = '#0f0',
}

interface CommandType {
  message: string;
  type: CommandTypes;
}

const Commandline = () => {
  const [currentCommand, setCurrentCommand] = useState<string>('');

  const [commands, setCommands] = useState<CommandType[]>([
    {
      message: 'Microsoft Windows [Version 0.420.69]',
      type: CommandTypes.info,
    },
    {
      message: '(c) Microsoft Corporation. Alle Rechte vorbehalten.',
      type: CommandTypes.info,
    },
    { message: '', type: CommandTypes.info },
  ]);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLDivElement>(null as any);
  function getCommandResponse(command: string) {
    command = command.toLowerCase().trim();
    switch (command) {
      case CommandlineEnum.help:
        return {
          message:
            'These commands are currently avaivable: help, git, dir, ls, cd, mkdir',
          type: CommandTypes.info,
        };
      case CommandlineEnum.git:
        return {
          message:
            'fatal: not a git repository (or any of the parent directories): .git, try visiting https://github.com/patrickcerny for further instructions',
          type: CommandTypes.error,
        };
      default:
        return {
          message:
            'This was an uknown command! Try "help" for further information',
          type: CommandTypes.error,
        };
    }
  }

  function onCommandAdd(command: string) {
    setCommands([
      ...commands,
      { message: command, type: CommandTypes.info },
      getCommandResponse(command),
    ]);
  }

  function handleKeyDown(e: any): void {
    if (e.key === 'Enter') {
      onCommandAdd(e.target.value);
      e.target.value = '';
    } else {
    }
  }

  function handeWindowClick(): void {
    inputRef.current?.focus();
  }

  //cant use % if using overflow y
  useEffect(() => {
    setWindowHeight(mainRef.current.clientHeight);
    //scroll to bottom
    mainRef.current.scrollTop = mainRef.current.scrollHeight;
    return () => {};
  }, []);

  return (
    <div
      className='commandline-main'
      ref={mainRef}
      style={{ height: windowHeight }}
      onClick={handeWindowClick}
    >
      <div className='commandline-main__toolbar'></div>
      <div className='commandline-main__window'>
        {commands.map((command, index) => {
          return (
            <span
              key={index}
              className='commandline-main__text'
              style={{ color: command.type }}
            >
              {command.message === '' ? <br /> : command.message}
            </span>
          );
        })}
        <div className='commandline-main__window__input-container'>
          <span>{'C:\\Users\\User\\Desktop>'}</span>
          <input
            ref={inputRef}
            type='text'
            onKeyDown={handleKeyDown}
            className='commandline-main__input'
          />
        </div>
      </div>
    </div>
  );
};

export default Commandline;
