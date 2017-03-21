# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexGCanvas"
  s.version      = "0.0.1"
  s.summary      = "Weex GCanvas"

  s.description  = <<-DESC
                   Weexplugin Source Description
                   DESC

  s.homepage     = "https://github.com/weex-plugins/weex-plugin-gcanvas/"
  s.license = {
    :type => 'Copyright',
    :text => <<-LICENSE
           Alibaba-INC copyright
    LICENSE
  }
  s.authors      = {
                     "jwxbond" =>"jwxbond@gmail.com"
                   }
  s.platform     = :ios
  s.ios.deployment_target = "7.0"

  #s.source       = { :git => 'https://github.com/weex-plugins/weex-plugin-gcanvas.git', :tag => '0.0.1' }
  #s.source       = { :git => 'https://github.com/weex-plugins/weex-plugin-gcanvas.git', :branch => 'plugin-dev' }
  s.source =  { :path => '.' }
  s.source_files  = "ios/Sources/**/*.{h,m,mm}"
  
  s.requires_arc = true
  s.dependency "WeexPlugin"
  s.dependency "WeexSDK"
  s.dependency "SDWebImage"
  s.dependency "GCanvas"
end
