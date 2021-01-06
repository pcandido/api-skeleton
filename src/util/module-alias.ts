import path from 'path'
import moduleAlias from 'module-alias'

const basePath = path.resolve(__dirname, '..', '..')

moduleAlias.addAliases({
    '@src': path.join(basePath, 'src'),
    '@test': path.join(basePath, 'test'),
})
