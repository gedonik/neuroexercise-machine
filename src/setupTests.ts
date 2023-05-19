/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

global.jest = vi;

expect.extend(matchers);
