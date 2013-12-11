#watch( '.*\.*' ) do
watch('.git/*') do
  system 's3-upload'
end
