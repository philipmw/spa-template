# Philip's Single-Page Application template #

This template aims to make it easier to create a
modern Single-Page Application using good practices.

Good practices this repo provides:

* TypeScript
* TSLint
* Webpack
* React
* unit-testing with Jest and Enzyme
* 3rd party dependencies loaded externally using a CDN
* easy local development

## Prerequisites

Install [`npm`](https://www.npmjs.com/) using whatever
means is most convenient for you, such as [Homebrew](https://brew.sh/) on macOS.

## Initialization

    $ npm install
 
This creates a `node_modules` directory.

## Unit-test SPA

    $ npm test

## View SPA locally

    $ npm start

And your browser will magically open to the web app.
This supports hot-reloading, so feel free to edit Javascript and see your changes
in the browser immediately.

The other way that works is to build the app explicitly (`npm run build`), then
simply open _index.html_ from the local filesystem in the browser.

## Publish to the Internet

Build:

    $ npm run build

This will create `web/app.bundle.js`.

Then upload the contents of `web/` to your web host.

A non-traditional host that I really like, for its simplicity and speed, is
[Amazon S3 Static Website hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).

Here is the Internet-hosted version of this project: http://philipmw-spa-template.s3-website-us-west-2.amazonaws.com/

## Rationale for certain decisions

Q: Why is source and tests in the same directory, as opposed to `src/` vs `test/`?

A: The pro is that it feels more natural to have tests next to source.
   It is also how the book I'm reading, [_Test-Driven React_](https://pragprog.com/book/tbreact/test-driven-react),
   does it.
   The con is that Tslint's configuration is a touch more complex, since I want to
   apply different line rules to source vs. test code, but the files are in the same
   directory.

## Can you make it better?

I welcome your ideas and contributions.
Please open an issue or submit a pull request.
