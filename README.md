# Unhandled Promise Rejection in Node.js Server

This repository demonstrates a common error in Node.js applications: unhandled promise rejections.  The server simulates an asynchronous operation that might fail.  If the operation fails, an error is thrown, but it's not properly handled, resulting in an unhandled promise rejection and the server crashing.

## The Bug

The `doAsyncOperation` function simulates an asynchronous task that has a chance of failing.  The error handling within the `http.createServer` callback doesn't effectively catch and handle the potential error from `doAsyncOperation`, leading to a crash when the simulated asynchronous operation fails. 

## The Solution

The solution demonstrates proper error handling using try-catch blocks and the `process.on('unhandledRejection', ...)` event listener to capture and gracefully handle unhandled rejections.