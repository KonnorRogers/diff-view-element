const watchMode = process.argv.includes("--watch")

const cdndir = path.join(process.cwd(), "cdn")

;(async () => {
  const cdnConfig = {
    format: 'esm',
    target: 'es2017',
    entryPoints: [
      ...(await globby('./exports/**/*.js')),
    ],
    outdir: cdndir,
    chunkNames: 'chunks/[name].[hash]',
    define: {
      // Floating UI requires this to be set
      'process.env.NODE_ENV': '"production"'
    },
    bundle: true,
    external: [],
    splitting: true,
  }

  const configs = [
    cdnConfig
  ]

  if (watchMode) {
    // Use the context API to allow incremental dev builds
    const contexts = await Promise.all(configs.map((config) => esbuild.context(config)));
    await Promise.all(contexts.map(context => context.rebuild()));
    return contexts;
  } else {
    // Use the standard API for production builds
    return await Promise.all(configs);
  }
})()
