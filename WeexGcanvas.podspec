# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexGcanvas"
  s.version      = "0.0.1.1"
  s.summary      = "Weex Plugin"

  s.description  = <<-DESC
                   Weexplugin Source Description
                   DESC

  s.homepage     = "https://github.com"
  s.license = {
    :type => 'Copyright',
    :text => <<-LICENSE
            copyright
    LICENSE
  }
  s.authors      = {
                     "yourname" =>"youreamail"
                   }
  s.platform     = :ios
  s.ios.deployment_target = "7.0"

  s.source       = { :git => 'https://github.com/weex-plugins/weex-plugin-gcanvas.git', :tag => '0.0.1.1' }
  s.source_files  = "ios/Sources/*.{h,m,mm}"
  
  s.requires_arc = true
  s.dependency "WeexPluginLoader"
  s.dependency "WeexSDK"
  s.dependency "GCanvas"
  s.dependency "SDWebImage"
  s.libraries = "stdc++"
end
