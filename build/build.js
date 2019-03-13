'use strict'

var fs = require('fs');
const rm = require('rimraf')
const path = require('path')
const UglifyJS = require("uglify-js")
var jsp = UglifyJS.parser;
var pro = UglifyJS.uglify;

rm(path.join('./', 'min'), function (err) {
  if (err) throw err;
  var filePath = path.resolve('./lib');
  var fileout = path.resolve('./min');
  fs.mkdir(fileout, function (error) {
    if (error) {
      console.log(error);
      return false;
    }
  })
  fileDisplay(filePath);
});

function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {
            var isFile = stats.isFile();//是文件
            var isDir = stats.isDirectory();//是文件夹
            var fileout = filedir.replace('lib', 'min');
            if (isFile) {
              console.log('输出 目录',fileout)
              buildOne(filedir, fileout);　　　　　　　　　　　　　　　　　// 读取文件内容
            }
            if (isDir) {
              fs.mkdir(fileout, function (error) {
                if (error) {
                  console.log(error);
                  return false;
                }
              })
              fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      });
    }
  });
}
function buildOne(flieIn, fileOut) {
  var origCode = fs.readFileSync(flieIn, 'utf8');

  var result = UglifyJS.minify(origCode, {
    mangle: true ,//混淆
    compress: {
      dead_code: true,
      global_defs: {
        DEBUG: false//干掉console.log
      }
    }
  });
  // var ast = jsp.parse(origCode);
  //     ast = pro.ast_mangle(ast);
  //     ast = pro.ast_squeeze(ast);

  // var finalCode = pro.gen_code(ast);
  console.log('压缩文件', flieIn, fileOut)
  fs.writeFileSync(fileOut, result.code, 'utf8');
}
// rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
//   if (err) throw err
//   webpack(webpackConfig, (err, stats) => {
//     spinner.stop()
//     if (err) throw err
//     process.stdout.write(stats.toString({
//       colors: true,
//       modules: false,
//       children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
//       chunks: false,
//       chunkModules: false
//     }) + '\n\n')

//     if (stats.hasErrors()) {
//       console.log(chalk.red('  Build failed with errors.\n'))
//       process.exit(1)
//     }

//     console.log(chalk.cyan('  Build complete.\n'))
//     console.log(chalk.yellow(
//       '  Tip: built files are meant to be served over an HTTP server.\n' +
//       '  Opening index.html over file:// won\'t work.\n'
//     ))
//   })
// })
