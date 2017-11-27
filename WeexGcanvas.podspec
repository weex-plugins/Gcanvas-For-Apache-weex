# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexGcanvas"
  s.version      = "0.0.3.5"
  s.summary      = "Weex Plugin"

  s.description  = <<-DESC
                   Weexplugin Source Description
                   DESC

  s.homepage     = "https://github.com/weex-plugins/weex-plugin-gcanvas"
  s.license = {
    :type => 'Copyright',
    :text => <<-LICENSE
            copyright
    LICENSE
  }
  s.authors      = {
                     "jwxbond" =>"jwxbond@gmail.com"
                   }
  s.platform     = :ios
  s.ios.deployment_target = "8.0"

  s.source       = { :git => 'https://github.com/weex-plugins/weex-plugin-gcanvas.git', :tag => s.version }
  #s.source =  { :path => '.' }
  s.source_files  = "ios/Sources/*.{h,m,mm}"
  s.user_target_xcconfig  = { 'FRAMEWORK_SEARCH_PATHS' => "'$(PODS_ROOT)/WeexSDK', '$(PODS_ROOT)/WeexPluginLoader', '$(PODS_ROOT)/GCanvas'" }
  
  s.requires_arc = true
  s.dependency "WeexPluginLoader"
  s.dependency "WeexSDK", "~> 0.17.0"
  s.dependency "GCanvas"
  s.dependency "SDWebImage", "< 4.0.0"
  s.libraries = "stdc++"
end
