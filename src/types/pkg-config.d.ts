/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Tasks {
  'tasks.shortcut'?: string;
  /**
   * Tasks macros completion on the specific filetypes
   */
  'tasks.filetypes'?: string[];
  'tasks.triggerCharacters'?: string[];
  /**
   * Priority of macros completion
   */
  'tasks.priority'?: number;
  [k: string]: unknown;
}
