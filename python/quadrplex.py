#!/usr/bin/python

#import statement 
import sys
import re

#system argumnets
fasta_file = sys.argv[1]
gff_file = sys.argv[2]

#read in the fasta file
fasta_file_open = open(fasta_file,'r')
sequence = ''
for line_fasta in fasta_file_open.readlines():

	#if not the header
	if ">" not in line_fasta:
		line_fasta = line_fasta.rstrip()
		sequence = sequence + line_fasta

	#if the header or something else
	else:
		header = line_fasta

fasta_file_open.close()

#after the above we have 
#
#	sequence = the genome
#	header = the name of the genome
#

#read in gff file 
gff_file_open = open(gff_file,'r')
gff_lines = []
for line_gff in gff_file_open.readlines():

	#if not the header
	if ">" not in line_gff:
		line_gff = line_gff.rstrip()
		gff_lines.append(line_gff)

gff_file_open.close()


#after the above we have 
#
#	 gff_lines = the lines of the gff file
#

quadrplexes = []
for m in re.finditer(r'G{3,}.{1,7}G{3,}.{1,7}G{3,}.{1,7}G{3,}', sequence, re.I):

	string_to_print = str(m.group()) + "\t" + str(m.start()) + "\t" + str(m.end())
	quadrplexes.append(string_to_print)



#after the above we have
#
#	 quadreplex_output_array = array of 	motif 	start poisition 	end position
#	
#

#print statement

for each_a in quadrplexes:
	print each_a

print ""
print "GFF File"
print ""

for each_b in gff_lines:
	print each_b  