# Safe File

[![Build Status](https://secure.travis-ci.org/usingjsonschema/ujs-safefile-nodejs.png?branch=master)](http://travis-ci.org/usingjsonschema/ujs-safefile-nodejs)

Part of the [Using JSON Schema](http://usingjsonschema.github.io) project.

Safely managing text files requires being able to update the files in a
manner that allows recovery should the update fail. This module provides
support for reading and writing files normally and in a recoverable mode,
allowing auto-recovery when the program restarts.

## readFileSync

Read a file synchronously from a file system. Calls the ```readFileSync```
function from the ```fs``` library as part of its processing.

**readFileSync** (filename, [options])

> filename *String* Name of file to read (path optional)  
> options *Object* { encoding, flag }
>
> throws *SafeFileError*  
> returns *Buffer* (if encoding not specified) or *String* (if encoding specified)
 
    data = readFileSync (filename)

## writeFileSync

Write a file synchronously to a file system. Calls the ```writeFileSync```
function from the ```fs``` library as part of its processing.

**writeFileSync** (filename, data, [options])

> filename *String* Name of file to write (path optional)  
> data *String* or *Buffer* Data to write to the file
>
> options *Object* { encoding, mode, flag }  
> throws *SafeFileError*
 
    writeFileSync (filename, data)

## safeReadFileSync

Read a file synchronously from a file system, inspecting the file system state
and performing recovery processing if needed. Calls the ```readFileSync```
function from the ```fs``` library as part of its processing.

**safeReadFileSync** (filename, [options])

> filename *String* Name of file to read (path optional)  
> options *Object* { encoding, flag }
>
> throws *SafeFileError*  
> returns *Buffer* (if encoding not specified) or *String* (if encoding specified)
 
    data = safeReadFileSync (filename)

## safeWriteFileSync

Write data to a file synchronously, using a recoverable set of steps. Should
the write processing fail to complete, auto-recovery can perform the steps
required to bring the file content back to a stable state. Calls the
```writeFileSync``` function from the ```fs``` library as part of its
processing.

**safeWriteFileSync** (filename, data, [options])

> filename *String* Name of file to write (path optional)  
> data *String* or *Buffer* Data to write to the file  
> options *Object* { encoding, mode, flag }
>
> throws *SafeFileError*
 

    safeWriteFileSync (filename, data)

## safeGetState

Get the current state of the set of files representing the current file
system contents. Returns one of,

- SAFE_NORMAL, normal state, base and backup files only present
- SAFE_RECOVERABLE, partial write condition that is automatically recoverable
the next time a read, write or recover function is called
- SAFE_INTERVENE, last write failed before the data being written reached
a recoverable state. Manual intervention is required if recovery of the last
write is required, otherwise auto-recovery will recover to the prior stable
state.

**safeGetState** (filename)

> filename *String* Name of file to check (path optional)
>
> returns *Integer* State value (SAFE_NORMAL, SAFE_RECOVERABLE or SAFE_INTERVENE)
or a file error (INVALID_NAME, DOES_NOT_EXIST or IS_NOT_A_FILE)

    state = safeGetState (filename)

## safeRecover

Initiate the auto-recovery process. This follows the same steps as
```safeReadFileSync``` follows, but can be called independently.

**safeRecover** (filename)

> filename *String* Name of file to recover (path optional)
>
> throws *SafeFileError*

    safeRecover (file)

# SafeFileError

**SafeFileError** (code, message)

> code *Integer* Error code (from list below)
> message *String* Text message associated with code

```SafeFileError``` contains three properties (name, code, and message).

- *name* is the object name (*SafeFileError*), and is intended to be overridden
if derived from.
- *code* is the error code  
- *message* is a readable explanation message for the error

Constants for the error codes are defined in the class prototype,

- NO_ERROR
- INVALID_NAME
- DOES_NOT_EXIST
- IS_NOT_A_FILE
- READ_ERROR
- WRITE_ERROR
- SAFE_NORMAL
- SAFE_RECOVERABLE
- SAFE_INTERVENE

## Installation
The program can be installed using ```npm```, with the command,

    npm install ujs-safefile

## License
MIT
