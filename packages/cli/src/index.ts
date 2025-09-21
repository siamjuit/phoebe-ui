#!/usr/bin/env node

import { program } from 'commander'
import { addCommand } from './commands/add'
import { initCommand } from './commands/init'

program
  .name('phoebe')
  .description('CLI for Phoebe UI component library')
  .version('0.1.0')

program.addCommand(addCommand)
program.addCommand(initCommand)

program.parse()