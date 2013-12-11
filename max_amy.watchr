watch( '.*\.*' ) do
#watch('.git/refs/heads') do
  system 's3-upload'
end
